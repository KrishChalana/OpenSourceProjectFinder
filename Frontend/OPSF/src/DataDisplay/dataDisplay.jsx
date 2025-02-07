import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';


function ResultsPage() {
  const {query} = useParams();
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (query) {
      setLoading(true);
      setError('');
      setRepos([]);
      axios.get(`http://localhost:3000/search`, { params: { q: query } })
        .then((response) => {
          setRepos(response.data.items);
        })
        .catch(() => {
          setError('Error fetching repositories. Please try again.');
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [query]);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-8 text-center">Search Results for "{query}"</h1>
      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center mt-4 text-red-500">{error}</p>}
      <ul className="space-y-4 max-w-4xl mx-auto">
        {repos.map((repo) => (
          <li key={repo.id} className="p-6 bg-gray-900 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <div>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-xl font-semibold"
                >
                  {repo.full_name}
                </a>
                <p className="mt-2 text-gray-400">{repo.description}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">⭐ {repo.stargazers_count}</p>
                <p className="text-sm text-gray-500">🍴 {repo.forks_count}</p>
                <p className="text-sm text-gray-500">Issues: {repo.open_issues_count}</p>
                <p className="text-sm text-gray-500">Language: {repo.language}</p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-500">Owner: {repo.owner.login}</p>
              <p className="text-sm text-gray-500">Created at: {new Date(repo.created_at).toLocaleDateString()}</p>
              <p className="text-sm text-gray-500">Last updated: {new Date(repo.updated_at).toLocaleDateString()}</p>
            </div>
            <div className="mt-4">
              <a
                href={repo.owner.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm"
              >
                Owner Profile
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResultsPage;