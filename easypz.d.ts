export declare function sign(number: number): 1 | 0 | -1;
export declare class EasyPZLoader {
    static DEFAULT_MODES: string[];
    private easyPzElements;
    private static getSettingsFromString;
    checkElements(): void;
}
export declare class EzEventEmitter<T> {
    subscribers: ((value: T) => void)[];
    emit(value: T): void;
    subscribe(subscriber: (value: T) => void): void;
}
export declare class EzPromise<T> {
    private onDone;
    then(callback: (T: any) => void): void;
    private resolve;
    constructor(mainPart: (resolve: (T: any) => void, reject: any) => void);
}
export declare class EasyPzZoomData {
    x: number;
    y: number;
    scaleChange?: number;
    absoluteScaleChange?: number;
    targetX?: number;
    targetY?: number;
}
export declare class EasyPzPanData {
    x: number;
    y: number;
}
export declare class EasyPzCallbackData {
    event: any;
    modeName: any;
}
export declare class EasyPzMode {
    ids: string[];
    active?: boolean;
    data?: any;
    settings: any;
    onClickTouch?: (eventData: EasyPzCallbackData) => void;
    onMove?: (eventData: EasyPzCallbackData) => void;
    onClickTouchEnd?: (eventData: EasyPzCallbackData) => void;
    onMultiTouch?: (eventData: EasyPzCallbackData) => void;
    onWheel?: (eventData: EasyPzCallbackData) => void;
    onRightClick?: (eventData: EasyPzCallbackData) => void;
}
export declare class EasyPZ {
    private applyTransformTo;
    private static MOUSE_EVENT_TYPES;
    lastMouseDownTime: number;
    mouseDownTime: number;
    mouseMoveTime: number;
    mouseUpTime: number;
    lastMousePos: {
        x: number;
        y: number;
    };
    numberOfPointers: number;
    mousePos: {
        x: number;
        y: number;
    };
    private afterMouseMovedCallbacks;
    height: number;
    width: number;
    private lastTouchEvent;
    private static TOUCH_TO_COMPUTER_SWITCH_TIME_MS;
    static DIMENSIONS: string[];
    private enabledModes;
    onPanned: EzEventEmitter<EasyPzPanData>;
    onZoomed: EzEventEmitter<EasyPzZoomData>;
    resetAbsoluteScale: EzEventEmitter<void>;
    private totalTransform;
    private totalTransformSnapshot;
    el: HTMLElement;
    private options;
    constructor(el: Node | {
        node: () => HTMLElement;
    }, onTransform?: (transform: {
        scale: number;
        translateX: number;
        translateY: number;
    }) => void, options?: {
        minScale?: number;
        maxScale?: number;
        bounds?: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    }, enabledModes?: string[], modeSettings?: {
        [modeName: string]: {
            [settingName: string]: any;
        };
    }, onPanned?: (panData: EasyPzPanData, transform: {
        scale: number;
        translateX: number;
        translateY: number;
    }) => void, onZoomed?: (zoomData: EasyPzZoomData, transform: {
        scale: number;
        translateX: number;
        translateY: number;
    }) => void, onResetAbsoluteScale?: () => void, applyTransformTo?: string);
    setSettings(onTransform?: (transform: {
        scale: number;
        translateX: number;
        translateY: number;
    }) => void, options?: {
        minScale?: number;
        maxScale?: number;
        bounds?: {
            top: number;
            right: number;
            bottom: number;
            left: number;
        };
    }, enabledModes?: string[], modeSettings?: {
        [modeName: string]: {
            [settingName: string]: any;
        };
    }, onPanned?: (panData: EasyPzPanData, transform: {
        scale: number;
        translateX: number;
        translateY: number;
    }) => void, onZoomed?: (zoomData: EasyPzZoomData, transform: {
        scale: number;
        translateX: number;
        translateY: number;
    }) => void, onResetAbsoluteScale?: () => void, applyTransformTo?: string): void;
    private saveCurrentTransformation;
    private trackTotalTransformation;
    private getScaleWithinLimits;
    private ensureTransformWithinBounds;
    private lastAppliedTransform;
    private applyTransformation;
    private static parseTransform;
    private ngAfterViewInit;
    private setDimensions;
    private updateMousePosition;
    private getMousePosition;
    getRelativePosition(x: number, y: number): {
        x: number;
        y: number;
    };
    private onMouseTouchDown;
    private setupHostListeners;
    private onMouseDown;
    private onTouchStart;
    private onMouseTouchMove;
    private onMouseMove;
    private onTouchMove;
    private static modes;
    private modes;
    static addMode(unresolvedMode: (easyPZ: EasyPZ) => EasyPzMode): void;
    private getEventData;
    private getActiveModes;
    private onMultiTouchEvent;
    private onMouseTouchUp;
    private onMouseTouchEvent;
    private onMouseUp;
    private onMouseOut;
    private onTouchEnd;
    private onContextMenu;
    private onWheel;
    private onRightClick;
    private applyModeSettings;
    static easeInteraction(maxSpeed: number, duration: number, onStep: (data: {
        speed?: number;
        timePassed?: number;
        dist?: number;
    }) => void): {
        start: () => void;
        stop: () => void;
    };
    static frictionInteraction(maxSpeed: number, friction: number, onStep: (data: {
        speed?: number;
        timePassed?: number;
        dist?: number;
    }) => void): {
        start: () => void;
        stop: () => void;
    };
    static momentumInteraction(onStep: (data: {
        speed?: number;
        timePassed?: number;
        dist?: number;
    }) => void, speedFct: (timePassed: number) => number, duration: number): {
        start: () => void;
        stop: () => void;
    };
    static momentumInteractionOld(onStep: (dist: any) => void, speedFct: (timePassed: number) => number, duration: number): {
        start: () => void;
        stop: () => void;
    };
    static isRightClick(event: MouseEvent | TouchEvent): boolean;
    static getPositionDistance(pos1: {
        x: number;
        y: number;
    }, pos2: {
        x: number;
        y: number;
    }): number;
    callbackAfterTimeoutOrMovement(timeout: number, movement: number): EzPromise<number>;
}
