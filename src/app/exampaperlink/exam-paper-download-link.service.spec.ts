import { TestBed } from '@angular/core/testing';

import { ExamPaperDownloadLinkService } from './exam-paper-download-link.service';

describe('ExamPaperDownloadLinkService', () => {
  let service: ExamPaperDownloadLinkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamPaperDownloadLinkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
