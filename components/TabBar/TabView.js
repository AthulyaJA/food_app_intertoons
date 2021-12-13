import React, { useEffect, useMemo, useState } from "react";
import { Dimensions, Text, View } from "react-native";


const TabView = (props) => {
  const [currentTab, setCurrentTab] = useState(props?.defaultTab || 0);

  useEffect(() => {
    if (typeof props?.setCurrentTab === "function")
      props?.setCurrentTab(currentTab || props?.defaultTab);
  }, [currentTab]);

  const commonStyles = {
   
    textAlign: "center",
    padding: 10,
    width:150,
   
  };

  const tabSwitch = (tabID) => {
    setCurrentTab(tabID);
  };

  const config = {
    velocityThreshold: 0.5,
    directionalOffsetThreshold: 80,
  };

  const tabCount = useMemo(() => {
    return props?.tabs?.length;
  }, [props?.tabs]);

  return (
    <>
      {/* <GestureRecognizer
      onSwipeRight={() => {
        var nextTab = currentTab - 1;
        nextTab = nextTab === -1 ? tabCount - 1 : nextTab;
        tabSwitch(nextTab);
      }}
      onSwipeLeft={() => {
        var nextTab = currentTab + 1;
        nextTab = nextTab > tabCount - 1 ? 0 : nextTab;
        tabSwitch(nextTab);
      }}
      config={config}
    > */}
      <View
        style={{
          flexDirection: "row",
          
        }}
      >
        {props?.tabs?.map((tab, tabIndex) => {
          return (
            <View
              key={tabIndex}
              scrollEnabled={true}
              
              style={{
                flex: 1,
                ...(tabIndex === currentTab
                  ? { borderBottomWidth: 2, borderBottomColor: "#24a0ed"}
                  : null),
              }}
            >
              {tabCount === 4 ? (
                <Text
                  {...(tabIndex === 0
                    ? {
                        style: {
                          ...commonStyles,
                          textAlign: "center",
                        },
                      }
                    : tabIndex === 1
                    ? {
                        style: {
                          fontFamily: "inter-bold",
                          padding:10,
                          textAlign: "center",
                        },
                      }
                    : {
                        style: {
                          ...commonStyles,
                          textAlign: "center",
                        },
                      })}
                  onPress={() => {
                    tabSwitch(tabIndex);
                  }}
                >
                  {tab?.label}
                </Text>
              ) : (
                <Text
                  {...(tabIndex === 0
                    ? {
                        style: {
                          ...commonStyles,
                          textAlign: "left",
                        },
                      }
                    : tabIndex === 1
                    ? {
                        style: {
                          ...commonStyles,
                          textAlign: "center",
                        },
                      }
                    : {
                        style: {
                          ...commonStyles,
                          textAlign: "right",
                        },
                      })}
                  onPress={() => {
                    tabSwitch(tabIndex);
                  }}
                >
                  {tab?.label}
                </Text>
              )}
            </View>
          );
        })}
      </View>
      {props?.tabs[currentTab]?.scene()}
      {/* </GestureRecognizer> */}
    </>
  );
};

export default TabView;
