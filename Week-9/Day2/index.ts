enum Department { Academics = "DEPT_ACADEMICS", IT = "DEPT_IT" }
type IssueStatus = "Open" | "In Progress" | "Resolved";
type TicketID = string | number;

interface BaseTicket {
  readonly id: TicketID;
  department: Department;
  resolvedDate?: Date;
  status: IssueStatus;
}

type SoftwareBug = BaseTicket & {
  recordType: "SOFTWARE_BUG";
  errorLog: string;
};

type HardwareFailure = BaseTicket & {
  recordType: "HARDWARE_FAILURE";
  location: string;
};

type IIAPIssue = SoftwareBug | HardwareFailure;

function processIIAPIssue(issue: IIAPIssue) {
  if (typeof issue.id === "number") {
    console.log(`\nProcessing Numeric ID: ${issue.id.toFixed(0)}`);
  } else {
    console.log(`\nProcessing Text ID: ${issue.id.toUpperCase()}`);
  }

  if (issue.recordType === "SOFTWARE_BUG") {
    console.log(`[SOFTWARE BUG] Log: ${issue.errorLog}`);
  } else if (issue.recordType === "HARDWARE_FAILURE") {
    console.log(`[HARDWARE FAILURE] Location: ${issue.location}`);
  }
}

const bugTicket: SoftwareBug = {
  recordType: "SOFTWARE_BUG",
  id: "ERR-9942",
  department: Department.IT,
  status: "Open",
  errorLog: "NullReferenceException in API route."
};

const hardwareTicket: HardwareFailure = {
  recordType: "HARDWARE_FAILURE",
  id: 84392,
  department: Department.Academics,
  status: "In Progress",
  location: "Block B, Room 104"
};

processIIAPIssue(bugTicket);
processIIAPIssue(hardwareTicket);