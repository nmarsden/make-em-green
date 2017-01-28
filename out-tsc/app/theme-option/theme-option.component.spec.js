import { async, TestBed } from '@angular/core/testing';
import { ThemeOptionComponent } from './theme-option.component';
describe('ThemeOptionComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ThemeOptionComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ThemeOptionComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/theme-option/theme-option.component.spec.js.map