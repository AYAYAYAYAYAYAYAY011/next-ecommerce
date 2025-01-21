import prisma from "@/app/lib/db"

export async function findAllProduct() {
    return await prisma.product.findMany({
        orferBy: {id: "desc"}
    })
}
export function findByIdProduct(id: string){
    return prisma.product.findUnique({
        where: { id: id}
    })
}

export function createProduct(){

}
export function updateProduct(){

}
export function removeProduct(){

}
