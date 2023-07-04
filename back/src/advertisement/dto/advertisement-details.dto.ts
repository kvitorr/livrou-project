export class AdvertisementDetailsDto {
  advertisementId: number;
  description: string;
  advertisementType: string;
  condition: string;
  locations: string[];
  bookId: number;
  bookTitle: string;
  authors: string[];
  synopsis: string;
  bookImageUrl: string;
  price: number | null;
  advertiserName: string;
  advertiserImageUrl: string | null;
  accountCreationDate: Date;
  contactNumber: string;
}