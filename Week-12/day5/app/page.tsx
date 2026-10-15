import {db} from '../lib/db';
import {addAsset,addTask,complete,archive} from './actions';
export default async function Page({searchParams}:{searchParams:Promise<{q?:string,page?:string}>}){
 const {q='',page='1'}=await searchParams;const current=Math.max(1,Number.parseInt(page)||1);
 const where={deletedAt:null,name:{contains:q,mode:'insensitive' as const}};
 const [assets,total,orders]=await Promise.all([
  db.asset.findMany({where,include:{department:true},skip:(current-1)*5,take:5,orderBy:{id:'desc'}}),
  db.asset.count({where}),
  db.workOrder.findMany({where:{asset:{deletedAt:null}},include:{asset:true,assignments:{include:{user:true}}},orderBy:{id:'desc'},take:10})
 ]);
 return <main><h1>Day 5: Task & Asset Tracker</h1>
 <form action={addAsset}><input name="name" required placeholder="Asset name"/><button>Add asset</button></form>
 <form method="GET"><input name="q" defaultValue={q} placeholder="Search assets"/><button>Search</button></form>
 <p>{total} matching assets</p><ul>{assets.map(a=><li key={a.id}>{a.name} ({a.department.name}) <form action={archive} style={{display:'inline'}}><input type="hidden" name="id" value={a.id}/><button>Archive</button></form></li>)}</ul>
 {current>1&&<a href={`/?q=${encodeURIComponent(q)}&page=${current-1}`}>Previous </a>}
 {current*5<total&&<a href={`/?q=${encodeURIComponent(q)}&page=${current+1}`}>Next</a>}
 <h2>Create work order</h2><form action={addTask}><input name="title" required placeholder="Task title"/><select name="assetId" required>{assets.map(a=><option key={a.id} value={a.id}>{a.name}</option>)}</select><button disabled={!assets.length}>Create</button></form>
 <h2>Recent work orders</h2><ul>{orders.map(o=><li key={o.id}>{o.title} — {o.asset.name} — {o.status} <form action={complete} style={{display:'inline'}}><input type="hidden" name="id" value={o.id}/><button>Done</button></form></li>)}</ul>
 </main>;
}
