import type { ResponseDto } from "@/dto/response/response.dto.ts";

import { richFetch } from "@/utils/fetch.utils.ts";

export async function getHelloApi(): Promise<ResponseDto> {
  const data = await richFetch<ResponseDto>("/public/hello");

  if ("error" in data) {
    throw new Error(data.error);
  }

  return data.result;
}
