const config = {
  config: {
    rootClasses(sectionKey, node) {
      const type = node.props.type;
      const classConfig = {
        outer: '',
        legend: 'block mb-1 font-bold',
        label() {
          if (type === 'text') {
            return 'block text-xs font-medium leading-6 text-slate-900';
          }
          if (type === 'radio') {
            return 'text-xs font-medium leading-6 text-slate-900 mt-0.5';
          }
        },
        options() {
          if (type === 'radio') {
            return 'flex flex-col flex-grow mt-2';
          }
        },
        input() {
          if (type === 'text') {
            return 'block w-full rounded-md border-0 py-1.5 mt-1 text-slate-900 ring-1 ring-inset ring-slate-300 placeholder:text-slate-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-xs sm:leading-6';
          }
          if (type === 'radio') {
            return 'mr-2';
          }
        },
        wrapper() {
          if (type === 'radio') {
            return 'flex flex-row flex-grow';
          }
        },
        message: 'text-red-500 text-xs',
        help: 'mt-3 text-xs leading-5 text-slate-500',
      };

      function createClassObject(classesArray) {
        if (!classesArray) return '';
        const classList = {};
        classesArray.split(' ').forEach((className) => {
          classList[className] = true;
        });
        return classList;
      }

      const target = classConfig[sectionKey];
      if (typeof target === 'string') {
        return createClassObject(target);
      } else if (typeof target === 'function') {
        return createClassObject(classConfig[sectionKey]());
      }
    },
  },
};

export default config;
