import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const ProductsFiltersSchema = z.object({
  id: z.string(),
  name: z.string(),
})

type ProductsFilters = z.infer<typeof ProductsFiltersSchema>

export function ProductsFilters() {
  const { register, handleSubmit } = useForm<ProductsFilters>({
    resolver: zodResolver(ProductsFiltersSchema)
  })

  function handleFilterProducts(data: ProductsFilters) {
    console.log(data)
  }

  return (
    <form
      onSubmit={handleSubmit(handleFilterProducts)}
      className="flex items-center gap-2"
    >
      <Input placeholder="ID do Produto" {...register('id')} />
      <Input placeholder="Nome do Produto" {...register('name')} />
      <Button type="submit" variant="secondary">
        <Search className="w-4 h-4 mr-2" />
        Filtrar Resultados
      </Button>
    </form>
  )
}
