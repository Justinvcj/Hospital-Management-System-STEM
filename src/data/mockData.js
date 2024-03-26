export const departments = [
  { id: 1, name: 'General Medicine', description: 'Primary care and general health issues.' },
  { id: 2, name: 'Cardiology', description: 'Heart and cardiovascular diseases.' },
  { id: 3, name: 'Orthopedics', description: 'Bone, joint, and muscle issues.' },
  { id: 4, name: 'Pediatrics', description: 'Child and infant healthcare.' },
  { id: 5, name: 'Neurology', description: 'Brain and nervous system disorders.' }
];

export const doctors = [
  { id: 1, name: 'Dr. Sarah Smith', departmentId: 1, available: 'Mon, Wed, Fri', fee: 500 },
  { id: 2, name: 'Dr. John Doe', departmentId: 1, available: 'Tue, Thu, Sat', fee: 500 },
  { id: 3, name: 'Dr. Emily Chen', departmentId: 2, available: 'Mon, Tue, Thu', fee: 800 },
  { id: 4, name: 'Dr. Michael Brown', departmentId: 3, available: 'Wed, Fri, Sat', fee: 700 },
  { id: 5, name: 'Dr. Robert Davis', departmentId: 4, available: 'Mon, Thu, Fri', fee: 600 },
  { id: 6, name: 'Dr. Lisa Wilson', departmentId: 5, available: 'Tue, Wed, Sat', fee: 1000 }
];
