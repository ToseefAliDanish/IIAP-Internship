import {db} from '../lib/db';
import {add,update,remove} from './actions';
export default async function Page({searchParams}:{searchParams:Promise<{q?:string,page?:string}>}) {
 const {q='',page='1'}=await searchParams;
 const current=Math.max(1,Number.parseInt(page)||1);
 const where={name:{contains:q,mode:'insensitive' as const}};
 const [assets,total]=await Promise.all([db.asset.findMany({where,include:{department:true},skip:(current-1)*5,take:5,orderBy:{id:'desc'}}),db.asset.count({where})]);
 return <main><h1>Day 4: Prisma Assets</h1>
 <form action={add}><input name="name" placeholder="New asset" required/><button>Add</button></form>
 <form method="GET"><input name="q" placeholder="Search" defaultValue={q}/><button>Filter</button></form>
 <p>Total matching: {total}</p><ul>{assets.map(a=><li key={a.id}>{a.name} — {a.department.name} — {a.status} <form action={update} style={{display:'inline'}}><input type="hidden" name="id" value={a.id}/><button>Repair</button></form> <form action={remove} style={{display:'inline'}}><input type="hidden" name="id" value={a.id}/><button>Delete</button></form></li>)}</ul>
 {current>1&&<a href={`/?q=${encodeURIComponent(q)}&page=${current-1}`}>Previous </a>}
 {current*5<total&&<a href={`/?q=${encodeURIComponent(q)}&page=${current+1}`}> Next</a>}
 </main>;
}
