import {ref, onMounted, computed} from 'vue';

export function useTheme() {
  const currentTheme = ref('system');
  const availableThemes = ['light', 'dark', 'system'] as const;

  const setTheme = (newTheme: typeof availableThemes[number]) => {
    currentTheme.value = newTheme;
    localStorage.setItem('userTheme', newTheme);
    applyTheme();
  };

  const applyTheme = () => {
    document.body.classList.remove(...availableThemes);

    if (currentTheme.value === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const systemTheme = systemPrefersDark ? 'dark' : 'light';
      document.body.classList.add(systemTheme);
    } else {
      document.body.classList.add(currentTheme.value);
    }
  };

  onMounted(() => {
    const savedTheme = localStorage.getItem('userTheme');

    if (savedTheme) {
      currentTheme.value = savedTheme;
    } else {
      currentTheme.value = 'system';
    }

    applyTheme();
  });

  return computed({
    get: () => currentTheme.value,
    set: setTheme
  });
}
