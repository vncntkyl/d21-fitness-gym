import { Button } from '@/components/ui/button'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useCreateMemberships } from '@/hooks/use-memberships'
import { addMembershipPlanSchema } from '@/lib/schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

function AddPlan({ onOpenChange }: { onOpenChange: (open: boolean) => void }) {
    const { mutate, isPending } = useCreateMemberships();
    const form = useForm<z.infer<typeof addMembershipPlanSchema>>({
        resolver: zodResolver(addMembershipPlanSchema),
        defaultValues: {
            name: undefined,
            description: undefined,
            amount: undefined,
            payment_mode: 1
        }
    })
    const onSubmit = async (values: z.infer<typeof addMembershipPlanSchema>) => {

        console.log(values);
        mutate(values, {
            onSuccess: () => {
                form.reset()
                onOpenChange(false)
            }
        })
    }
    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>New Membership Plan</DialogTitle>
                <DialogDescription>Fields with <span className='text-primary'>*</span> are required fields.</DialogDescription>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-full">
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Membership Name/Label <span className='text-primary'>*</span></FormLabel>
                                <FormControl>
                                    <Input {...field} required disabled={isPending} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Textarea {...field} placeholder='optional' disabled={isPending} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Amount <span className='text-primary'>*</span></FormLabel>
                                <FormControl>
                                    <Input {...field} required disabled={isPending} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="payment_mode"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Payment Mode <span className='text-primary'>*</span></FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => field.onChange(Number(value))}// hook form controls this
                                        defaultValue={String(field.value)} // initial value
                                        disabled={isPending}
                                    >
                                        <SelectTrigger className='w-full rounded-none'>
                                            <SelectValue placeholder="Select a payment mode" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Annual</SelectItem>
                                            <SelectItem value="2">Monthly</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full hover:bg-primary/70" disabled={!form.formState.isValid || form.formState.isSubmitting || isPending}>Save</Button>
                </form>
            </Form>
        </DialogContent>
    )
}

export default AddPlan