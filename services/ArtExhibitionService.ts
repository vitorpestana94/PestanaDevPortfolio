import builder from "./request/RequestDtoBuilder";
import { clientApi } from "@/lib/api/client";
import { proxy } from "@/constants/httpConstants";
import { GetArtWotkResponseDto } from "@/models/interfaces/dtos/responses/GetArtWotkResponseDto";

export default class ArtExhibitionService {
    static async GetArts(
      search: string
   ): Promise<GetArtWotkResponseDto[]> {
        const response = await clientApi.get(proxy, {
            params: builder.GetArts(search),
        });

        return response.data
   }
}
