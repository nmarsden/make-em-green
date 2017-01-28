import { async, TestBed } from '@angular/core/testing';
import { SelectLevelComponent } from './select-level.component';
describe('SelectLevelComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SelectLevelComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SelectLevelComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/select-level/select-level.component.spec.js.map