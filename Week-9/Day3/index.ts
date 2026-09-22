interface IIAPTask {
  id: string;
  title: string;
  status: "Open" | "Resolved";
  assignedTo?: string;
}

type CreateTaskDTO = Omit<IIAPTask, "id">;

type UpdateTaskDTO = Partial<IIAPTask>;

type TaskPreview = Pick<IIAPTask, "id" | "title">;

type TaskDirectory = Record<string, IIAPTask>;

type ArchivableTask = Required<IIAPTask>;

interface ApiResponse<T> {
  statusCode: number;
  data: T;
}

async function databaseQuery<T>(mockData: T, delayMs: number): Promise<ApiResponse<T>> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ statusCode: 200, data: mockData });
    }, delayMs);
  });
}

async function createNewTask(
  payload: CreateTaskDTO, 
  onSuccess: (response: ApiResponse<IIAPTask>) => void
): Promise<void> {
  
  console.log(`[DB] Saving new task: "${payload.title}"...`);
  
  const newTask: IIAPTask = {
    id: `TASK-${Math.floor(Math.random() * 1000)}`,
    ...payload
  };

  const response = await databaseQuery<IIAPTask>(newTask, 800);
  
  onSuccess(response);
}

async function runIIAPService() {
  console.log("--- Starting IIAP Database Service ---\n");

  const newTaskPayload: CreateTaskDTO = {
    title: "Fix router in Library",
    status: "Open"
  };

  await createNewTask(newTaskPayload, (res) => {
    console.log(`\n✅ Success! DB returned Status: ${res.statusCode}`);
    console.log(`📌 Generated Task ID: ${res.data.id}`);
    
    const preview: TaskPreview = {
      id: res.data.id,
      title: res.data.title
    };
    console.log(`🔍 Dashboard Preview:`, preview);
  });
}

runIIAPService();