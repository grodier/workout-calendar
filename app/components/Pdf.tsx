import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";
import { createTw } from "react-pdf-tailwind";

const tw = createTw({});

interface PDFProps {
  title: string;
}

export default function PDF({ title }: PDFProps) {
  return (
    <Document style={tw("h-full")}>
      <Page size="A4" style={tw("flex flex-col h-full")}>
        <View style={tw("px-6 py-4")}>
          <View style={tw("text-base font-semibold leading-6 text-gray-900")}>
            <Text>{title}</Text>
          </View>
        </View>
        <View
          style={tw(
            "border border-gray-300 rounded-sm flex flex-auto flex-col mx-2 mb-2"
          )}
        >
          {/* Day of week column heading */}
          <View
            style={tw(
              "flex flex-row gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700"
            )}
          >
            <View
              style={[
                tw("flex flex-row justify-center bg-white py-2"),
                { flexGrow: 1 },
              ]}
            >
              <Text>Mon</Text>
            </View>
            <View
              style={[
                tw("flex flex-row justify-center bg-white py-2"),
                { flexGrow: 1 },
              ]}
            >
              <Text>Tue</Text>
            </View>
            <View
              style={[
                tw("flex flex-row justify-center bg-white py-2"),
                { flexGrow: 1 },
              ]}
            >
              <Text>Wed</Text>
            </View>
            <View
              style={[
                tw("flex flex-row justify-center bg-white py-2"),
                { flexGrow: 1 },
              ]}
            >
              <Text>Thu</Text>
            </View>
            <View
              style={[
                tw("flex flex-row justify-center bg-white py-2"),
                { flexGrow: 1 },
              ]}
            >
              <Text>Fri</Text>
            </View>
            <View
              style={[
                tw("flex flex-row justify-center bg-white py-2"),
                { flexGrow: 1 },
              ]}
            >
              <Text>Sat</Text>
            </View>
            <View
              style={[
                tw("flex flex-row justify-center bg-white py-2"),
                { flexGrow: 1 },
              ]}
            >
              <Text>Sun</Text>
            </View>
          </View>

          {/* Individual day of week squares */}
          <View
            style={tw(
              "flex flex-col bg-gray-200 text-xs leading-6 text-gray-700 flex-auto"
            )}
          >
            <View style={tw("flex flex-col w-full gap-px")}>
              {/* Week 1 */}
              <View style={[tw("flex flex-row gap-px"), { flexGrow: 1 }]}>
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <View
                    key={i}
                    style={[tw("relative bg-white px-3 py-2"), { flexGrow: 1 }]}
                  >
                    <Text>{i}</Text>
                  </View>
                ))}
              </View>
              {/* Week 2 */}
              <View style={tw("flex flex-row gap-px")}>
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <View
                    key={i}
                    style={[tw("relative bg-white px-3 py-2"), { flexGrow: 1 }]}
                  >
                    <Text>{i}</Text>
                  </View>
                ))}
              </View>
              {/* Week 3 */}
              <View style={tw("flex flex-row gap-px")}>
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <View
                    key={i}
                    style={[tw("relative bg-white px-3 py-2"), { flexGrow: 1 }]}
                  >
                    <Text>{i}</Text>
                  </View>
                ))}
              </View>
              {/* Week 4 */}
              <View style={tw("flex flex-row gap-px")}>
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <View
                    key={i}
                    style={[tw("relative bg-white px-3 py-2"), { flexGrow: 1 }]}
                  >
                    <Text>{i}</Text>
                  </View>
                ))}
              </View>
              {/* Week 5 */}
              <View style={tw("flex flex-row gap-px")}>
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <View
                    key={i}
                    style={[tw("relative bg-white px-3 py-2"), { flexGrow: 1 }]}
                  >
                    <Text>{i}</Text>
                  </View>
                ))}
              </View>
              {/* Week 6 */}
              <View style={tw("flex flex-row gap-px")}>
                {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <View
                    key={i}
                    style={[tw("relative bg-white px-3 py-2"), { flexGrow: 1 }]}
                  >
                    <Text>{i}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export function PDFv2({ title }: PDFProps) {
  return (
    <Document style={tw("h-full")}>
      <Page size="A4" style={tw("flex flex-col h-full")}>
        <View>
          <Text>TITLE</Text>
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
              <Text>Mon</Text>
            </View>
            <View style={tw("flex-1 bg-white py-2")}>
              <Text>Mon</Text>
            </View>
            <View style={tw("flex-1 bg-white py-2")}>
              <Text>Mon</Text>
            </View>
            <View style={tw("flex-1 bg-white py-2")}>
              <Text>Mon</Text>
            </View>
            <View style={tw("flex-1 bg-white py-2")}>
              <Text>Mon</Text>
            </View>
            <View style={tw("flex-1 bg-white py-2")}>
              <Text>Mon</Text>
            </View>
          </View>
          {/*Weeks*/}
          <View style={[tw("flex- 1 flex flex-row gap-px"), { flexGrow: 1 }]}>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <View
                key={i}
                style={[tw("relative bg-white px-3 py-2"), { flexGrow: 1 }]}
              >
                <Text>{i}</Text>
              </View>
            ))}
          </View>
          <View style={[tw("flex- 1 flex flex-row gap-px"), { flexGrow: 1 }]}>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <View
                key={i}
                style={[tw("relative bg-white px-3 py-2"), { flexGrow: 1 }]}
              >
                <Text>{i}</Text>
              </View>
            ))}
          </View>
          <View style={[tw("flex- 1 flex flex-row gap-px"), { flexGrow: 1 }]}>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <View
                key={i}
                style={[tw("relative bg-white px-3 py-2"), { flexGrow: 1 }]}
              >
                <Text>{i}</Text>
              </View>
            ))}
          </View>
          <View style={[tw("flex- 1 flex flex-row gap-px"), { flexGrow: 1 }]}>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <View
                key={i}
                style={[tw("relative bg-white px-3 py-2"), { flexGrow: 1 }]}
              >
                <Text>{i}</Text>
              </View>
            ))}
          </View>
          <View style={[tw("flex- 1 flex flex-row gap-px"), { flexGrow: 1 }]}>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <View
                key={i}
                style={[tw("relative bg-white px-3 py-2"), { flexGrow: 1 }]}
              >
                <Text>{i}</Text>
              </View>
            ))}
          </View>
          <View style={[tw("flex- 1 flex flex-row gap-px"), { flexGrow: 1 }]}>
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <View
                key={i}
                style={[tw("relative bg-white px-3 py-2"), { flexGrow: 1 }]}
              >
                <Text>{i}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
}
