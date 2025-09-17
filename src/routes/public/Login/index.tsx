import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@/lib/schema"
import { useForm } from "react-hook-form"
import z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import logo from "@/assets/d21-logo-np.webp";
import { Link, Navigate, useNavigate } from "react-router-dom"
import { login } from "@/api/auth"
import { useAuth } from "@/context/authContext"

function Login() {
    const navigate = useNavigate();
    const { setUser } = useAuth();

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    })

    const onSubmit = async (values: z.infer<typeof loginSchema>) => {

        const data = await login(values.username, values.password);
        if (data) {
            setUser(data);
            localStorage.setItem("token", data.token);
            navigate("/admin")
        }
    }

    if (localStorage.getItem("token")) return <Navigate to="/admin" replace />
    return (
        <main className="h-screen bg-black">
            <div className='h-screen flex flex-col items-center justify-center container mx-auto gap-8 pb-[6rem]'>
                <Link to='/'>
                    <img src={logo} alt="" className="max-w-[100px]" />
                </Link>
                <div className="border min-w-sm p-8 shadow space-y-8 bg-white">
                    <header>
                        <p className="font-bold text-2xl font-lexend">Welcome back!</p>
                        <p className="text-sm text-zinc-500">Provide your login details to enter.</p>
                    </header>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Username or Email Address</FormLabel>
                                        <FormControl>
                                            <Input {...field} required />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Password</FormLabel>
                                        <FormControl>
                                            <Input type="password" required {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <div className="flex items-center justify-between">
                                <div className="inline-flex gap-2">
                                    <Checkbox id="remember" />
                                    <Label htmlFor="remember">Remember me</Label>
                                </div>
                                <Button variant="link" size="sm" className="p-0">Forgot my password</Button>
                            </div>
                            <Button type="submit" className="w-full hover:bg-primary/70">Login</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </main>
    )
}

export default Login