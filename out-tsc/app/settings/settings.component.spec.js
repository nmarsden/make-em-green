import { async, TestBed } from '@angular/core/testing';
import { SettingsComponent } from './settings.component';
describe('SettingsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SettingsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SettingsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/settings/settings.component.spec.js.map