interface ContactFormData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  service: string;
}

interface ApiResponse {
  message: string;
}

export async function postContact(data: ContactFormData): Promise<ApiResponse> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`API error: ${response.statusText}`);
  }

  const result = await response.json();
  return result;
}
