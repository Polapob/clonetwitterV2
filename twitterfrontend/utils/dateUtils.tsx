export const listGenerator = (start: number, end: number): number[] => {
    const answer = [];
    for (let i = start; i <= end; i++) {
      answer.push(i);
    }
    return answer;
  };
export const MonthLists = [
    "มกราคม",
    "กุมพาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฏาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

export const Yearlists = listGenerator(1900, 2022).reverse();
export const maxDateObject: { [key: string]: number } = {
  มกราคม: 31,
  กุมพาพันธ์: 29,
  มีนาคม: 31,
  เมษายน: 30,
  พฤษภาคม: 31,
  มิถุนายน: 30,
  กรกฏาคม: 31,
  สิงหาคม: 31,
  กันยายน: 30,
  ตุลาคม: 31,
  พฤศจิกายน: 30,
  ธันวาคม: 31,
};

export const monthToIndex: { [key: string]: number } = {
  มกราคม: 1,
  กุมพาพันธ์: 2,
  มีนาคม: 3,
  เมษายน: 4,
  พฤษภาคม: 5,
  มิถุนายน: 6,
  กรกฏาคม: 7,
  สิงหาคม: 8,
  กันยายน: 9,
  ตุลาคม: 10,
  พฤศจิกายน: 11,
  ธันวาคม: 12,
};