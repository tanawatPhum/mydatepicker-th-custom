import { IMyDayLabels } from "./my-day-labels.interface";
import { IMyMonthLabels } from "./my-month-labels.interface";
import { IMyDate } from "./my-date.interface";
import { IMyDateRange } from "./my-date-range.interface";
import { IMyMarkedDates } from "./my-marked-dates.interface";
import { IMyMarkedDate } from "./my-marked-date.interface";
export interface IMyOptions {
    dayLabels?: IMyDayLabels;
    monthLabels?: IMyMonthLabels;
    dateFormat?: string;
    showTodayBtn?: boolean;
    todayBtnTxt?: string;
    firstDayOfWeek?: string;
    sunHighlight?: boolean;
    markCurrentDay?: boolean;
    disableUntil?: IMyDate;
    disableSince?: IMyDate;
    disableDays?: Array<IMyDate>;
    enableDays?: Array<IMyDate>;
    markDates?: Array<IMyMarkedDates>;
    markWeekends?: IMyMarkedDate;
    disableDateRanges?: Array<IMyDateRange>;
    disableWeekends?: boolean;
    showWeekNumbers?: boolean;
    monthSelector?: boolean;
    yearSelector?: boolean;
    height?: string;
    width?: string;
    selectionTxtFontSize?: string;
    inline?: boolean;
    showClearDateBtn?: boolean;
    showDecreaseDateBtn?: boolean;
    showIncreaseDateBtn?: boolean;
    alignSelectorRight?: boolean;
    openSelectorTopOfInput?: boolean;
    indicateInvalidDate?: boolean;
    editableDateField?: boolean;
    editableMonthAndYear?: boolean;
    disableHeaderButtons?: boolean;
    minYear?: number;
    maxYear?: number;
    componentDisabled?: boolean;
    showSelectorArrow?: boolean;
    showInputField?: boolean;
    openSelectorOnInputClick?: boolean;
    ariaLabelInputField?: string;
    ariaLabelClearDate?: string;
    ariaLabelOpenCalendar?: string;
    ariaLabelPrevMonth?: string;
    ariaLabelNextMonth?: string;
    ariaLabelPrevYear?: string;
    ariaLabelNextYear?: string;
    ariaLabelDecreaseDate?: string;
    ariaLabelIncreaseDate?: string;
}
