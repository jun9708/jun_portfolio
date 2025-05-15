// projectDetails.ts

export interface Project {
  id: number;
  title: string;
  details: string;
  filePath: string; // 로컬 경로 또는 링크
}

export const projects: Project[] = [
  {
    id: 1,
    title: '게시판 프로젝트',
    details: '로컬 스토리지를 사용하는 React SPA 게시판입니다.',
    filePath: 'file:///C:/Users/wnsgu/Desktop/project1.html',
  },
  {
    id: 2,
    title: '할 일 관리 앱',
    details: 'Zustand를 사용한 Todo 리스트 예제입니다.',
    filePath: 'file:///C:/Users/wnsgu/Desktop/project2.html',
  }
];
