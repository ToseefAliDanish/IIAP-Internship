import React, { useReducer, useEffect, useState } from "react";

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: T) => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [storedValue, setValue] as const;
}

interface FormState {
  step: number;
  department: string;
  priority: string;
  description: string;
}

type FormAction =
  | { type: "NEXT_STEP" }
  | { type: "PREV_STEP" }
  | { type: "UPDATE_FIELD"; payload: { field: keyof FormState; value: string } }
  | { type: "RESET_FORM"; payload: FormState };

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "UPDATE_FIELD":
      return { ...state, [action.payload.field]: action.payload.value };
    case "RESET_FORM":
      return action.payload;
    default:
      return state;
  }
}

const initialState: FormState = {
  step: 1,
  department: "",
  priority: "Low",
  description: "",
};

export default function IIAPMultiStepForm() {
  
  const [savedDraft, setSavedDraft] = useLocalStorage<FormState>("iiap_form_draft", initialState);
  
  
  const [state, dispatch] = useReducer(formReducer, initialState);

  useEffect(() => {
    if (savedDraft.step > 1 || savedDraft.department !== "") {
      dispatch({ type: "RESET_FORM", payload: savedDraft });
    }
  }, []);

  useEffect(() => {
    setSavedDraft(state);
  }, [state, setSavedDraft]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: { field: e.target.name as keyof FormState, value: e.target.value },
    });
  };

  return (
    <div style={{ maxWidth: "450px", margin: "20px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px", fontFamily: "sans-serif" }}>
      <h2>IIAP Issue Tracker (Step {state.step} of 3)</h2>
      <progress value={state.step} max="3" style={{ width: "100%", marginBottom: "20px" }} />

      {state.step === 1 && (
        <div>
          <label>Department:</label>
          <select name="department" value={state.department} onChange={handleChange} style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }}>
            <option value="">Select Department...</option>
            <option value="IT">IT Support</option>
            <option value="Facilities">Facilities Management</option>
          </select>
          <button onClick={() => dispatch({ type: "NEXT_STEP" })} disabled={!state.department}>Next</button>
        </div>
      )}

      {state.step === 2 && (
        <div>
          <label>Priority Level:</label>
          <select name="priority" value={state.priority} onChange={handleChange} style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="Critical">Critical</option>
          </select>
          
          <label>Issue Description:</label>
          <textarea name="description" value={state.description} onChange={handleChange} rows={4} style={{ display: "block", width: "100%", margin: "10px 0", padding: "8px" }} />

          <button onClick={() => dispatch({ type: "PREV_STEP" })} style={{ marginRight: "10px" }}>Back</button>
          <button onClick={() => dispatch({ type: "NEXT_STEP" })} disabled={!state.description}>Review</button>
        </div>
      )}

      {state.step === 3 && (
        <div>
          <h3>Review Ticket</h3>
          <p><strong>Department:</strong> {state.department}</p>
          <p><strong>Priority:</strong> {state.priority}</p>
          <p><strong>Description:</strong> {state.description}</p>
          
          <button onClick={() => dispatch({ type: "PREV_STEP" })} style={{ marginRight: "10px" }}>Back to Edit</button>
          <button onClick={() => {
            alert("Ticket Submitted to IIAP System!");
            dispatch({ type: "RESET_FORM", payload: initialState });
          }} style={{ backgroundColor: "#4CAF50", color: "white", padding: "8px 16px", border: "none" }}>Submit Ticket</button>
        </div>
      )}
      
      <p style={{ fontSize: "12px", color: "gray", marginTop: "20px" }}>
        *Try refreshing the page. Your progress is saved securely in local storage via our custom hook!
      </p>
    </div>
  );
}