import BottomSheet from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";

const useBottomSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const closeSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  const openSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  return { bottomSheetRef, openSheet, closeSheet }
};

export default useBottomSheet;
