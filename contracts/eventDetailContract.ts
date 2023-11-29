export interface EventDetailContract {
  id: string;
  title: string;
  description: string;
  coverImageUrl: string;
  createdDateAndTime: Date;
  createdBy: string;
  startDateAndTime: Date;
  endDateAndTime: Date;
  location: string;
  isOpenForAll: boolean;
  attendies: string[];
  menuItems: string[];
  isCancelled: boolean;
  isRescheduled: boolean;
  note: string;
}
