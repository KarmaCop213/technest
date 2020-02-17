import { HighlightDirective } from './highlight.directive';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

const animationTimeMs: number = 1100;

@Component({
  template: `<div appHighlight [previousValue]="previousValue" [currentValue]="currentValue"></div>`
})
class TestHighlightComponent {
  previousValue: number;
  currentValue: number;
}

describe('HighlightDirective', () => {
  let component: TestHighlightComponent;
  let fixture: ComponentFixture<TestHighlightComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestHighlightComponent, HighlightDirective]
    });
    fixture = TestBed.createComponent(TestHighlightComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('div'));
    jasmine.clock().install();
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective();
    expect(directive).toBeTruthy();
  });

  it('should be green when going up', () => {
    component.previousValue = 1;
    component.currentValue = 2;
    fixture.detectChanges();
    expect(inputEl.classes).toEqual({ 'backgroundGreen': true });
    jasmine.clock().tick(animationTimeMs);
    fixture.detectChanges();
    expect(inputEl.classes).toEqual({ '': true });
  })

  it('should be red when going down', () => {
    component.previousValue = 2;
    component.currentValue = 1;
    fixture.detectChanges();
    expect(inputEl.classes).toEqual({ 'backgroundRed': true });
    jasmine.clock().tick(animationTimeMs);
    fixture.detectChanges();
    expect(inputEl.classes).toEqual({ '': true });
  })

  it('should be normal when constant', () => {
    component.previousValue = 1;
    component.currentValue = 1;
    fixture.detectChanges();
    expect(inputEl.classes).toEqual({ '': true });
    jasmine.clock().tick(animationTimeMs);
    fixture.detectChanges();
    expect(inputEl.classes).toEqual({ '': true });
  })
});
