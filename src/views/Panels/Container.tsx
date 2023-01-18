import React from "react";
import { Box } from "@chakra-ui/react";
import ChevronLeft from "~/components/Icons/ChevronLeft";
import ChevronRight from "~/components/Icons/ChevronRight";
import Close from "~/components/Icons/Close";
import useLayout from "~/hooks/useLayout";

export const PanelItemContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const {
    closePanel,
    isPanelOpen,
    isPanelExtended,
    expandPanel,
    contractPanel,
  } = useLayout();

  return (
    <>
      <Box
        boxShadow={"md"}
        style={{
          position: "absolute",
          zIndex: 1,
          height: "calc(100% - 130px)",
          background: "#ffffff",
          width: isPanelExtended ? "100%" : "320px",
          left: isPanelOpen ? "0px" : "-320px",
          transition: "all 0.25s ease",
          display: "flex",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      >
        <Box
          sx={{
            flex: 1,
            position: "relative",
            display: "flex",
          }}
        >
          {/* CLOSE PANEL */}
          <Box
            onClick={closePanel}
            sx={{
              position: "absolute",
              top: "20px",
              right: isPanelExtended ? "1.75rem" : "1rem",
              cursor: "pointer",
            }}
          >
            <Close size={15} />
          </Box>
          {/* EXPAND PANEL */}
          <Box
            onClick={isPanelExtended ? contractPanel : expandPanel}
            sx={{
              background: isPanelExtended ? "#f1f2f6" : "#ffffff",
              right: isPanelExtended ? "0" : "-18px",
              borderTopEndRadius: isPanelExtended ? "0px" : "10px",
              borderBottomEndRadius: isPanelExtended ? "0px" : "10px",
              borderTopStartRadius: isPanelExtended ? "10px" : "0",
              borderBottomStartRadius: isPanelExtended ? "10px" : "0",
              boxShadow: isPanelExtended
                ? "none"
                : "0 4px 6px -1px rgba(0, 0, 0, 0.1),0 2px 4px -1px rgba(0, 0, 0, 0.06)",
              clipPath: "inset(-10px -10px -10px 0)",
              transform: "translateY(-50%)",
              transition: "all 0.25s ease",
              cursor: "pointer",
              position: "absolute",
              zIndex: 3,
              top: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "20px",
              height: "60px",
            }}
          >
            {isPanelExtended ? (
              <ChevronLeft size={16} />
            ) : (
              <ChevronRight size={16} />
            )}
          </Box>
          <Box
            sx={{
              paddingLeft: "50px",
              flex: 1,
              display: "flex",
            }}
          >
            <Box
              display={"flex"}
              flex={1}
              padding={isPanelExtended ? "0 1.25rem 1rem 1rem" : "0"}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const PanelListContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isPanelOpen, openPanel } = useLayout();
  return (
    <Box
      boxShadow={isPanelOpen ? "inner" : "md"}
      sx={{
        width: "50px",
        minHeight: "225px",
        background: "#ffffff",
        position: "absolute",
        zIndex: 2,
        top: "50%",
        transform: "translateY(-50%)",
        transition: "all 0.25s ease",
        cursor: "pointer",
        padding: "0.25rem 0",
      }}
    >
      {children}
    </Box>
  );
};
