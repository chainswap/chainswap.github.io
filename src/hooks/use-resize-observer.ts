import { callBatched } from "./use-batch";
import { useState, useEffect } from "react";

type UseResizeObserverCallback = (ref: Element) => void;

const useFakeResizeObserver = (ref: Element | null, cb: UseResizeObserverCallback) => {
	useEffect(() => {
		if (ref) {
			cb(ref);
		}
	}, [cb, ref]);
};

const useNativeResizeObserver = (ref: Element | null, cb: UseResizeObserverCallback) => {
	const [observer] = useState(() => {
		return new ResizeObserver((entries) => {
			callBatched(() => cb(entries[0].target));
		});
	});

	useEffect(() => {
		if (ref) {
			observer.observe(ref);
			return () => observer.unobserve(ref);
		}
		return () => null;
	}, [observer, ref]);
};

export const useResizeObserver =
	typeof window === "undefined" || !(window as any).ResizeObserver
		? useFakeResizeObserver
		: useNativeResizeObserver;
