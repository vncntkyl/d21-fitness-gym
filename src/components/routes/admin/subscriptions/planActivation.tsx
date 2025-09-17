import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '@/components/ui/alert-dialog';
import { usePlanActivation } from '@/hooks/use-subscriptions';
import type { Subscription } from '@/types/Subscriptions'

function PlanActivation({ plan, onSuccess }: { plan: Subscription; onSuccess: () => void }) {
    const { mutate } = usePlanActivation();
    const onSubmit = () => {
        mutate({ data: { status: plan.status === 1 ? 2 : 1 }, id: plan.ID }, {
            onSuccess: onSuccess
        })
    }
    return (
        <AlertDialogContent aria-description={undefined} aria-describedby={undefined}>
            <AlertDialogHeader>
                <AlertDialogTitle>{plan.status === 1 ? "Deactivate" : "Activate"} Subscription Plan</AlertDialogTitle>
            </AlertDialogHeader>
            <div>
                <p>Are you sure you want to {plan.status === 1 ? "deactivate" : "activate"} this plan?</p>
            </div>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onSubmit}>Proceed</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    )
}

export default PlanActivation