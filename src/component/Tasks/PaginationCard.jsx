import React from 'react';

const PaginationCard = () => {
    return (
        <div>
            {!loading && !error && totalPages > 1 && (
                    <div style={{
                        display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 40,
                          position: 'relative', zIndex: 1
                    }}>
                        <button
                            disabled={page === 1}
                            onClick={() => setPage(p => Math.max(p - 1, 1))}
                            style={{
                                padding: '8px 16px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)',
                                background: page === 1 ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
                                color: page === 1 ? 'rgba(255,255,255,0.2)' : '#fff',
                                fontSize: 13, fontWeight: 600, cursor: page === 1 ? 'not-allowed' : 'pointer',
                                transition: 'all 0.2s',
                            }}

                        >
                            &larr; Prev
                        </button>

                        {Array.from({ length: totalPages }).map((_, idx) => {
                            const pNum = idx + 1;
                            const isCurrent = page === pNum;
                            return (
                                <button
                                    key={pNum}
                                    onClick={() => setPage(pNum)}
                                    style={{
                                        width: 36, height: 36, borderRadius: 10,
                                           border: isCurrent ? '1px solid #ff4d00' : '1px solid rgba(255,255,255,0.08)',
                                        background: isCurrent ? 'rgba(255,77,0,0.12)' : 'rgba(255,255,255,0.04)',
                                        color: isCurrent ? '#ff4d00' : 'rgba(255,255,255,0.6)',
                                        fontSize: 13, fontWeight: 700, cursor: 'pointer',

                                        transition: 'all 0.2s',
                                    }}
                                >
                                    {pNum}
                                </button>
                            );
                        })}

                        <button
                            disabled={page === totalPages}

                            onClick={() => setPage(p => Math.min(p + 1, totalPages))}
                            style={{
                                padding: '8px 16px', borderRadius: 10, border: '1px solid rgba(255,255,255,0.08)',
                                background: page === totalPages ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.04)',
                                color: page === totalPages ? 'rgba(255,255,255,0.2)' : '#fff',
                                fontSize: 13, fontWeight: 600, cursor: page === totalPages ? 'not-allowed' : 'pointer',
                                transition: 'all 0.2s',

                            }}
                        >
                            Next &rarr;
                         </button>
                       </div>
                )}
            </div>

            
              {activeTask && (
                <TaskDetailModal

                    task={activeTask}
                    onClose={closeModal}
                    onProposalSubmit={handleProposalSubmit}
                />
            )}

        </div>
    );
};

export default PaginationCard;