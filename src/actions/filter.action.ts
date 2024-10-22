'use server'

export default async function filterAction(formData: FormData): Promise<void>{
  const filterData = {
    brand: formData.get('brand'),
    model: formData.get('model'),
    type: formData.get('type'),
    transmission: formData.get('transmission'),
    mileage: formData.get('mileage'),
    price: formData.getAll('price'),
  }
  console.log(filterData);
}