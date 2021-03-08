/**
 * This file was generated from BarcodeScanner.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { ActionValue, EditableValue } from "mendix";

export interface BarcodeScannerProps<Style> {
    name: string;
    style: Style[];
    barcode: EditableValue<string>;
    autoFocus: boolean;
    showMask: boolean;
    showAnimatedLine: boolean;
    onDetect?: ActionValue;
}

export interface BarcodeScannerPreviewProps {
    class: string;
    style: string;
    barcode: string;
    autoFocus: boolean;
    showMask: boolean;
    showAnimatedLine: boolean;
    onDetect: {} | null;
}
