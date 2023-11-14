/*initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('ymap-1'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [76.959641, 43.225261],

                // Уровень масштабирования
                zoom: 18
            }
        }
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());
}*/

    const LOCATION = {center: [76.959641, 43.225261], zoom: 18};

      window.map = null;

      main();
      async function main() {
        await ymaps3.ready;
        const {YMap, YMapDefaultSchemeLayer, YMapControls, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

        const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

        map = new YMap(document.getElementById('ymap-1'), {location: LOCATION});

        map.addChild((scheme = new YMapDefaultSchemeLayer()));
        map.addChild(new YMapDefaultFeaturesLayer());

        map.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));

        const el = document.createElement('img');
        el.className = 'my-marker';
        el.src = 'assets/img/main_page/header-logo.svg';
        el.onclick = () => map.update({location: {...LOCATION, duration: 400}});
        map.addChild(new YMapMarker({coordinates: LOCATION.center}, el));
      }

      
      const LOCATION2 = {center: [76.961581, 43.211326], zoom: 18};
      window.map2 = null;

      main2();
      async function main2() {
        await ymaps3.ready;
        const {YMap, YMapDefaultSchemeLayer, YMapControls, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

        const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

        map2 = new YMap(document.getElementById('ymap-2'), {location: LOCATION2});

        map2.addChild((scheme = new YMapDefaultSchemeLayer()));
        map2.addChild(new YMapDefaultFeaturesLayer());

        map2.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));

        const el = document.createElement('img');
        el.className = 'my-marker';
        el.src = 'assets/img/contacts_page/elite-life-logo.png';
        el.onclick = () => map2.update({location: {...LOCATION2, duration: 400}});
        map2.addChild(new YMapMarker({coordinates: LOCATION2.center}, el));
      }


      const LOCATION3 = {center: [76.961581, 43.211326], zoom: 18};
      window.map3 = null;

      main3();
      async function main3() {
        await ymaps3.ready;
        const {YMap, YMapDefaultSchemeLayer, YMapControls, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

        const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

        map3 = new YMap(document.getElementById('ymap-3'), {location: LOCATION3});

        map3.addChild((scheme = new YMapDefaultSchemeLayer()));
        map3.addChild(new YMapDefaultFeaturesLayer());

        map3.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));

        const el = document.createElement('img');
        el.className = 'my-marker';
        el.src = 'assets/img/contacts_page/elite-life-2-res.png';
        el.onclick = () => map2.update({location: {...LOCATION3, duration: 400}});
        map3.addChild(new YMapMarker({coordinates: LOCATION3.center}, el));
      }

      const LOCATION4 = {center: [76.963270, 43.211799], zoom: 18};
      window.map4 = null;

      main4();
      async function main4() {
        await ymaps3.ready;
        const {YMap, YMapDefaultSchemeLayer, YMapControls, YMapDefaultFeaturesLayer, YMapMarker} = ymaps3;

        const {YMapZoomControl} = await ymaps3.import('@yandex/ymaps3-controls@0.0.1');

        map4 = new YMap(document.getElementById('ymap-4'), {location: LOCATION4});

        map4.addChild((scheme = new YMapDefaultSchemeLayer()));
        map4.addChild(new YMapDefaultFeaturesLayer());

        map4.addChild(new YMapControls({position: 'right'}).addChild(new YMapZoomControl({})));

        const el = document.createElement('img');
        el.className = 'my-marker';
        el.src = 'assets/img/contacts_page/mob-logo.webp';
        el.onclick = () => map2.update({location: {...LOCATION4, duration: 400}});
        map4.addChild(new YMapMarker({coordinates: LOCATION4.center}, el));
      }

