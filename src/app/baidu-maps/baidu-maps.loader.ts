export const loader = function(ak: string,  callback: Function) {
    const MAP_URL = `https://api.map.baidu.com/api?v=2.0&ak=${ak}&callback=baidumapinit&s=1`;

    const baiduMap: MapObjct = window['baiduMap'];
    if (baiduMap && baiduMap.status === MapStatus.LOADING) {
        return baiduMap.callbacks.push(callback);
    }

    if (baiduMap && baiduMap.status === MapStatus.LOADED) {
        return callback();
    }

    window['baiduMap'] = { status: MapStatus.LOADING, callbacks: [] };
    window['baidumapinit'] = function() {
        window['baiduMap'].status = MapStatus.LOADED;
        callback();
        window['baiduMap'].callbacks.forEach((cb: Function) => cb());
        window['baiduMap'].callbacks = [];
    };

    const createTag = function() {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = MAP_URL;
        document.body.appendChild(script);
    };
    createTag();
};

export enum MapStatus {
    LOADING,
    LOADED,
}

export interface MapObjct {
    status: MapStatus;
    callbacks: Function[];
}
