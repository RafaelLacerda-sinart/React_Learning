import { Label } from "@radix-ui/react-label"
import { Input } from "./ui/input"
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog"
import { DialogFooter, DialogHeader } from "./ui/dialog"
import { Button } from "./ui/button"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const createProductSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  price: z.coerce.number().min(0, "Preço inválido"),
})

type CreateProductFormData = z.infer<typeof createProductSchema>

export function CreateProductDialog() {
  const { register, handleSubmit } = useForm<CreateProductFormData>({
    resolver: zodResolver(createProductSchema),
  })

  function handleCreateProduct(data: CreateProductFormData) {
    console.log(data)
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Novo Produto</DialogTitle>
        <DialogDescription>
          Criar um novo produto no sistema
        </DialogDescription>
      </DialogHeader>

      <form
        onSubmit={handleSubmit(handleCreateProduct)}
        className="space-y-6"
      >
        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="name">Produto</Label>
          <Input
            className="col-span-3"
            id="name"
            {...register("name")}
          />
        </div>

        <div className="grid grid-cols-4 items-center text-right gap-3">
          <Label htmlFor="price">Preço</Label>
          <Input
            type="number"
            className="col-span-3"
            id="price"
            {...register("price")}
          />
        </div>

        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </DialogClose>

          <Button type="submit">Salvar</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  )
}
