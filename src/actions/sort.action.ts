'use server'
export const sortAction = async (formData: FormData): Promise<void> => {
  const sortData = {
    quantity: formData.get('quantity'),
    order: formData.get('order'),
  }
  console.log(sortData);
}