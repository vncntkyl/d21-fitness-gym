import { Button } from '@/components/ui/button'
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useEditPaymentMode } from '@/hooks/use-subscriptions'
import { editPaymentModeSchema } from '@/lib/schema'
import type { Subscription } from '@/types/Subscriptions'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'

function EditPaymentMode({ plan, onSuccess }: { plan: Subscription; onSuccess: () => void }) {
    const { mutate } = useEditPaymentMode();
    const form = useForm<z.infer<typeof editPaymentModeSchema>>({
        resolver: zodResolver(editPaymentModeSchema),
        defaultValues: {
            payment_mode: plan.payment_mode,
        },
        mode: "onChange"
    })
    const onSubmit = (values: z.infer<typeof editPaymentModeSchema>) => {
        mutate({ data: values, id: plan.ID },
            {
                onSuccess: onSuccess
            }
        )
    }


    return (
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit Payment Mode</DialogTitle>
                <DialogDescription>Change payment mode for <span className='font-semibold'>{plan.name}</span> plan.</DialogDescription>
            </DialogHeader>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4 w-full'>
                    <FormField
                        control={form.control}
                        name="payment_mode"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Payment Mode</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => field.onChange(Number(value))}// hook form controls this
                                        defaultValue={String(field.value)} // initial value
                                    // disabled={isPending}
                                    >
                                        <SelectTrigger className='w-full rounded-none'>
                                            <SelectValue placeholder="Select a payment mode" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">Annual</SelectItem>
                                            <SelectItem value="2">Monthly</SelectItem>
                                            <SelectItem value="3">Daily</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full hover:bg-primary/70" disabled={!form.formState.isValid || form.formState.isSubmitting}>Save</Button>
                </form>
            </Form>
        </DialogContent>
    )
}

export default EditPaymentMode