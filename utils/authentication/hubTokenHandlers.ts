import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { serverApi } from "@/lib/api/server";
import builder from "@/services/request/RequestDtoBuilder";
import HubTokenResponseDto from "@/models/interfaces/dtos/responses/HubTokenResponseDto";

export async function handleGetHubToken(req: NextRequest) {
   try {
      const api = await serverApi(req);
      const request = builder.GetHubToken();

      const response = await api.post<HubTokenResponseDto>(request.path);

      return NextResponse.json({ token: response.data.token });
   } catch (error) {
      const status = axios.isAxiosError(error) ? (error.response?.status ?? 500) : 500;

      return NextResponse.json({ message: "unexpected" }, { status });
   }
}
