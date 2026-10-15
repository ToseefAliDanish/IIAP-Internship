import {PrismaClient} from '@prisma/client';
const db=new PrismaClient();
async function main(){
 const d=await db.department.upsert({where:{name:'IT'},create:{name:'IT'},update:{}});
 let user=await db.user.findFirst({where:{name:'Ali'}});
 if(!user)user=await db.user.create({data:{name:'Ali',departmentId:d.id,profile:{create:{note:'Technician'}}}});
 if(await db.asset.count()===0){const asset=await db.asset.create({data:{name:'Laptop',departmentId:d.id}});await db.workOrder.create({data:{title:'Fix laptop',assetId:asset.id,assignments:{create:{userId:user.id}}}});}
}
main().finally(()=>db.$disconnect());
