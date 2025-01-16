import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/(main)/components/ui/avatar"
import {CustomerResponse} from "@/app/(cms)/dashboard/customers/customer.types";

export interface RecentSalesType {
  customers: CustomerResponse[]
}

export function RecentSales(sales: RecentSalesType) {
  return (
    <div className="space-y-8">
      {
        sales.customers?.map(sale => (
            <div key={sale.id} className="flex items-center">
              <Avatar className="h-9 w-9">
                <AvatarImage src="/avatars/01.png" alt="Avatar"/>
                <AvatarFallback>{sale.firstName.charAt(0) + sale.lastName.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium leading-none">{sale.firstName + " " + sale.lastName}</p>
                <p className="text-sm text-muted-foreground">
                  {sale.email}
                </p>
              </div>
              <div className="ml-auto font-medium">+ {sale.selectedVehicle?.vehicleName}</div>
            </div>
        ))
      }
    </div>
  )
}
