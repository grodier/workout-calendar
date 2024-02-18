import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({});

interface PDFProps {
  title: string;
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

function getMonthStartDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
}

function getDaysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

function createDateArray(date: Date, startingDayOfWeek: number) {
  let startDay = getMonthStartDate(date);
  let daysInMonth = getDaysInMonth(date);

  let frontPaddedDayArray = [
    ...Array(startDay).fill(0),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ].slice(startingDayOfWeek);

  return [
    ...frontPaddedDayArray,
    ...Array(7 - (frontPaddedDayArray.length % 7)).fill(0),
  ];
}

function divideArrayIntoChunks(arr: Array<any>, chunkSize: number = 7) {
  let result = [];

  for (let i = 0; i < arr.length; i += chunkSize) {
    let chunk = arr.slice(i, i + chunkSize);
    result.push(chunk);
  }

  return result;
}

export function PDF({ title }: PDFProps) {
  let dividedDateArray = divideArrayIntoChunks(createDateArray(new Date(), 1));

  return (
    <Document style={tw("h-full")}>
      <Page size="A4" style={tw("flex flex-col h-full")}>
        <View
          style={tw(
            "px-6 py-4 text-base font-semibold leading-6 text-gray-900"
          )}
        >
          <Text>{title}</Text>
        </View>
        <View style={tw("flex-1 flex flex-col bg-gray-300 gap-px")}>
          {/*Heading*/}
          <View
            style={tw(
              "flex flex-row gap-px text-center text-xs font-semibold leading-6 text-gray-700"
            )}
          >
            <View style={tw("flex-1 bg-white py-2")}>
              <Text>Mon</Text>
            </View>
            <View style={tw("flex-1 bg-white py-2")}>
              <Text>Tue</Text>
            </View>
            <View style={tw("flex-1 bg-white py-2")}>
              <Text>Wed</Text>
            </View>
            <View style={tw("flex-1 bg-white py-2")}>
              <Text>Thu</Text>
            </View>
            <View style={tw("flex-1 bg-white py-2")}>
              <Text>Fri</Text>
            </View>
            <View style={tw("flex-1 bg-white py-2")}>
              <Text>Sat</Text>
            </View>
            <View style={tw("flex-1 bg-white py-2")}>
              <Text>Sun</Text>
            </View>
          </View>
          {/*Weeks*/}
          {dividedDateArray.map((week) => (
            <View
              style={[
                tw(
                  "flex-1 flex flex-row gap-px text-xs leading-6 text-gray-700"
                ),
                { flexGrow: 1 },
              ]}
            >
              {week.map((day, i) => (
                <View
                  key={`${day}_${i}`}
                  style={[
                    tw(
                      classNames(
                        day === 0 ? "bg-gray-100" : "bg-white",
                        "relative"
                      )
                    ),
                    { flexGrow: 1 },
                  ]}
                >
                  {day !== 0 && (
                    <Text style={tw("absolute top-3 left-2")}>{day}</Text>
                  )}
                </View>
              ))}
            </View>
          ))}
        </View>
      </Page>
    </Document>
  );
}
