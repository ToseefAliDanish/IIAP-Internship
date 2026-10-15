"use server";
import {db} from '../lib/db';
import {revalidatePath} from 'next/cache';
export async function addAsset(form:FormData){
 const name=String(form.get('name')??'').trim();if(!name)return;
 await db.$transaction(async tx=>{
  const dept=await tx.department.upsert({where:{name:'IT'},create:{name:'IT'},update:{}});
  await tx.asset.create({data:{name,departmentId:dept.id,createdBy:'admin'}});
 });revalidatePath('/');
}
export async function addTask(form:FormData){
 const title=String(form.get('title')??'').trim(),assetId=Number(form.get('assetId'));
 if(!title||!Number.isInteger(assetId))return;
 const asset=await db.asset.findFirst({where:{id:assetId,deletedAt:null}});if(!asset)return;
 await db.workOrder.create({data:{title,assetId}});revalidatePath('/');
}
export async function complete(form:FormData){
 const id=Number(form.get('id'));if(!Number.isInteger(id))return;
 await db.workOrder.update({where:{id},data:{status:'done'}});revalidatePath('/');
}
export async function archive(form:FormData){
 const id=Number(form.get('id'));if(!Number.isInteger(id))return;
 await db.asset.update({where:{id},data:{deletedAt:new Date()}});revalidatePath('/');
}
