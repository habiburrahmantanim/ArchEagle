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
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  if (!apiUrl) {
    throw new Error("API URL is not configured");
  }

  const response = await fetch(`${apiUrl}/contact`, {
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
