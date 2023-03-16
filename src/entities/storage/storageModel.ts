
constructor(private storage: IStorage) {
    this.load();
}

private persistShowOnBoarding = (data: string | null) => {
    if (data) {
        this.storage.set('SHOW_ONBOARDING', data);
    } else {
        this.storage.remove('SHOW_ONBOARDING');
    }
}

private load = () => {
    this.storage.get('SHOW_ONBOARDING')
        .then(data => { data && this.isShowOnBoardingRepository.save(data) })
        .catch(error => console.warn('AppStateModel -> load: SHOW_ONBOARDING', error));
}

get isShowOnBoarding() {
    return this.isShowOnBoardingRepository.data || '';
}

set isShowOnBoarding(data: string) {
    this.isShowOnBoardingRepository.save(data);
    this.persistShowOnBoarding(data);
}