export interface GetArtWotkResponseDto {
  objectId: number;
  title: string | null;
  primaryImage: string | null;
  primaryImageSmall: string | null;
  artistDisplayName: string | null;
  artistDisplayBio: string | null;
  objectDate: string | null;
  culture: string | null;
  medium: string | null;
  dimensions: string | null;
  department: string | null;
  isPublicDomain: boolean;
  objectUrl: string | null;
}