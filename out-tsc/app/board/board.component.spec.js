import { async, TestBed } from '@angular/core/testing';
import { BoardComponent } from './board.component';
describe('BoardComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BoardComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BoardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=/Users/nmarsden/dev/make-em-green/src/app/board/board.component.spec.js.map