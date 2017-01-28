import { async, TestBed } from '@angular/core/testing';
import { TutorialComponent } from './tutorial.component';
describe('TutorialComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TutorialComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TutorialComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/tutorial/tutorial.component.spec.js.map