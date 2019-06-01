/**
 * handyCollapse
 * https://github.com/sk-rt/handy-collapse
 * Copyright (c) 2018  Ryuta Sakai
 * Licensed under the MIT license.
 */
export interface Options {
    nameSpace: string;
    toggleButtonAttr: string;
    toggleContentAttr: string;
    activeClass: string;
    isAnimation: boolean;
    closeOthers: boolean;
    animationSpeed: number;
    cssEasing: string;
    onSlideStart: (isOpen: boolean, id: string) => void;
    onSlideEnd: (isOpen: boolean, id: string) => void;
}
export default class HandyCollapse {
    toggleContentEls: NodeListOf<HTMLElement>;
    toggleButtonEls: NodeListOf<HTMLElement>;
    private itemsState;
    options: Options;
    constructor(_options?: Partial<Options>);
    private init;
    /**
     * init Param & show/hide items
     */
    private initContentsState;
    /**
     * Add toggleButton Listners
     */
    handleButtonsEvent(buttonElement: NodeList): void;
    /**
     * Set state
     */
    private setItemState;
    /**
     * button click listner
     * @param  id - accordion ID
     */
    toggleSlide(id: string, isRunCallback?: boolean): void;
    /**
     * Open accordion
     * @param  id - accordion ID
     */
    open(id: string, isRunCallback?: boolean, isAnimation?: boolean): void;
    /**
     * Close accordion
     * @param id - accordion ID
     */
    close(id: string, isRunCallback?: boolean, isAnimation?: boolean): void;
    /**
     * Get Elemet Height
     * @param targetEl - target Element
     * @return Height(px)
     */
    getTargetHeight(targetEl: HTMLElement): number | void;
}