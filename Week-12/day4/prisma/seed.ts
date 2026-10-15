import { PrismaClient } from '@prisma/client';
const db=new PrismaClient();
async function main(){const d=await db.department.upsert({where:{name:'IT'},create:{name:'IT'},update:{}});if(await db.asset.count()===0)await db.asset.createMany({data:Array.from({length:12},(_,i)=>({name:`Asset ${i+1}`,departmentId:d.id}))});}
main().finally(()=>db.$disconnect());
