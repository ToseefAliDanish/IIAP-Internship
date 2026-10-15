"use server";
import { db } from '../lib/db';
import { revalidatePath } from 'next/cache';
export async function add(form:FormData) {
 const name=String(form.get('name')??'').trim(); if(!name) return;
 await db.$transaction(async tx=>{
  const department=await tx.department.upsert({where:{name:'IT'},create:{name:'IT'},update:{}});
  await tx.asset.create({data:{name,departmentId:department.id}});
 }); revalidatePath('/');
}
export async function update(form:FormData) {
 const id=Number(form.get('id')); if(!Number.isInteger(id))return;
 await db.asset.update({where:{id},data:{status:'repaired'}});revalidatePath('/');
}
export async function remove(form:FormData) {
 const id=Number(form.get('id'));if(!Number.isInteger(id))return;
 await db.asset.delete({where:{id}});revalidatePath('/');
}
