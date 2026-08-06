import builder from "./request/RequestDtoBuilder";
import { clientApi } from "@/lib/api/client";
import { proxy } from "@/constants/httpConstants";
import { NasaAstronomyPictureOfTheDayPageResponseDto } from "@/models/interfaces/dtos/responses/NasaAstronomyPictureOfTheDayPageResponseDto";

export default class NasaService {
    static async GetAstronomyPictureOfTheDay(
      date?: string
   ): Promise<NasaAstronomyPictureOfTheDayPageResponseDto> {
        const response = await clientApi.get(proxy, {
            params: builder.GetAstronomyPictureOfTheDay(date),
        });

        return response.data
   }
   
   static async GetAstronomyPictureOfThePeriod(
      startDate: string,
      endDate: string
   ): Promise<NasaAstronomyPictureOfTheDayPageResponseDto[]> {
        const response = await clientApi.get(proxy, {
            params: builder.GetAstronomyPictureOfThePeriod(startDate, endDate),
        });

        return response.data;
   }
}
